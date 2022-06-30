import { createStorage as create } from './storage';

export default function setupYoungDanStorage() {
  (window as any).youngDanStorage = create({
    prefixKey: 'YOUNGDAN__',
  });
}
