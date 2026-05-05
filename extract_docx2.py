import sys, struct, zlib, re
sys.stdout.reconfigure(encoding='utf-8', errors='replace')

with open(r'E:\viraledge\my-app\agency web info.docx', 'rb') as f:
    data = f.read()

print('File size:', len(data))

# Scan for all PK\x03\x04 local file headers
positions = []
search_pos = 0
while True:
    idx = data.find(b'PK\x03\x04', search_pos)
    if idx == -1:
        break
    positions.append(idx)
    search_pos = idx + 4

print(f'Found {len(positions)} local file headers')

for pos in positions:
    try:
        compression = struct.unpack('<H', data[pos+8:pos+10])[0]
        compressed_size = struct.unpack('<I', data[pos+18:pos+22])[0]
        uncompressed_size = struct.unpack('<I', data[pos+22:pos+26])[0]
        fname_len = struct.unpack('<H', data[pos+26:pos+28])[0]
        extra_len = struct.unpack('<H', data[pos+28:pos+30])[0]
        fname = data[pos+30:pos+30+fname_len].decode('utf-8', errors='replace')
        data_start = pos + 30 + fname_len + extra_len

        if fname == 'word/document.xml':
            print(f'Found {fname}: compression={compression}, compressed={compressed_size}, uncompressed={uncompressed_size}')
            if compression == 8:
                compressed_data = data[data_start:data_start+compressed_size]
                xml = zlib.decompress(compressed_data, -15).decode('utf-8', errors='replace')
                paras = re.findall(r'<w:p[ >].*?</w:p>', xml, re.DOTALL)
                print('\n--- DOCUMENT TEXT ---')
                for p in paras:
                    t = ''.join(re.findall(r'<w:t[^>]*>([^<]*)</w:t>', p))
                    if t.strip():
                        print(t)
            elif compression == 0:
                xml = data[data_start:data_start+uncompressed_size].decode('utf-8', errors='replace')
                paras = re.findall(r'<w:p[ >].*?</w:p>', xml, re.DOTALL)
                print('\n--- DOCUMENT TEXT ---')
                for p in paras:
                    t = ''.join(re.findall(r'<w:t[^>]*>([^<]*)</w:t>', p))
                    if t.strip():
                        print(t)
    except Exception as e:
        pass
