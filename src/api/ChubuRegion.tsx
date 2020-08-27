interface TypeChubu {
  id: number;
  name: string;
  show: string;
  lat_lon: string;
}
const ChubuRegion: TypeChubu[] = [
  {id: 1855431, name: 'Niigata', show: '新潟', lat_lon: '&lat=37.902222&lon=139.023605'},
  {id: 1856215, name: 'Nagano', show: '長野', lat_lon: '&lat=36.65139&lon=138.181107'},
  {id: 1860243, name: 'Kanazawa', show: '金沢', lat_lon: '&lat=36.59444&lon=136.625565'},
  {id: 1849876, name: 'Toyama', show: '富山', lat_lon: '&lat=36.695278&lon=137.211395'},
  {id: 1863985, name: 'Fukui', show: '福井', lat_lon: '&lat=36.06443&lon=136.222565'},
  {id: 1863641, name: 'Gifu', show: '岐阜', lat_lon: '&lat=35.422909&lon=136.760391'},
  {id: 1856057, name: 'Nagoya', show: '名古屋', lat_lon: '&lat=35.181469&lon=136.906403'},
  {id: 1851717, name: 'Shizuoka', show: '静岡', lat_lon: '&lat=34.97694&lon=138.383057'},
  {id: 1859100, name: 'Kofu', show: '甲府', lat_lon: '&lat=35.663891&lon=138.568329'},
];

export default ChubuRegion;