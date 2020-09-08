interface TypeKyushu {
  id: number;
  name: string;
  show: string;
  lat_lon: string;
}
const KyushuRegion: TypeKyushu[] = [
  {id: 1863967, name: 'Fukuoka', show: '福岡', lat_lon: '&lat=33.606392&lon=130.41806'},
  {id: 1860827, name: 'Kagoshima', show: '鹿児島', lat_lon: '&lat=31.560181&lon=130.558136'},
  {id: 1853303, name: 'Saga', show: '佐賀', lat_lon: '&lat=33.249321&lon=130.298798'},
  {id: 1856177, name: 'Nagasaki', show: '長崎', lat_lon: '&lat=32.74472&lon=129.873611'},
  {id: 1858419, name: 'Kumamoto', show: '熊本', lat_lon: '&lat=32.620491&lon=130.754303'},
  {id: 1854487, name: 'Oita', show: '大分', lat_lon: '&lat=33.23806&lon=131.612503'},
  {id: 1856710, name: 'Miyazaki', show: '宮崎', lat_lon: '&lat=32.198071&lon=131.297623'},
];

export default KyushuRegion;