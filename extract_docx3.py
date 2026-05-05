import sys, struct, zlib, re
sys.stdout.reconfigure(encoding='utf-8', errors='replace')

with open(r'E:\viraledge\my-app\agency web info.docx', 'rb') as f:
    data = f.read()

# Scan for all PK\x03\x04 local file headers
search_pos = 0
while True:
    idx = data.find(b'PK\x03\x04', search_pos)
    if idx == -1:
        break
    try:
        compression = struct.unpack('<H', data[idx+8:idx+10])[0]
        compressed_size = struct.unpack('<I', data[idx+18:idx+22])[0]
        uncompressed_size = struct.unpack('<I', data[idx+22:idx+26])[0]
        fname_len = struct.unpack('<H', data[idx+26:idx+28])[0]
        extra_len = struct.unpack('<H', data[idx+28:idx+30])[0]
        fname = data[idx+30:idx+30+fname_len].decode('utf-8', errors='replace')
        data_start = idx + 30 + fname_len + extra_len
        print(f'pos={idx}: {fname!r} compression={compression} csize={compressed_size} usize={uncompressed_size}')

        if fname == 'word/document.xml':
            if compression == 8:
                compressed_data = data[data_start:data_start+compressed_size]
                xml = zlib.decompress(compressed_data, -15).decode('utf-8', errors='replace')
                paras = re.findall(r'<w:p[ >].*?</w:p>', xml, re.DOTALL)
                print('\n--- DOCUMENT TEXT ---')
                for p in paras:
                    t = ''.join(re.findall(r'<w:t[^>]*>([^<]*)</w:t>', p))
                    if t.strip():
                        print(t)
    except Exception as e:
        print(f'Error at {idx}: {e}')
    search_pos = idx + 4
