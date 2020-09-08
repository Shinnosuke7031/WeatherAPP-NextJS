interface TypeJa {
  id: number;
  name: string;
  show: string;
  lat_lon: string;
}
const JapanArea: TypeJa[] = [
  {id: 1850147, name: 'Tokyo', show: '東京', lat_lon: '&lat=35.681236&lon=139.767125'},
  {id: 2128295, name: 'Sapporo', show: '札幌', lat_lon: '&lat=43.064171&lon=141.346939'},
  {id: 1855431, name: 'Niigata', show: '新潟', lat_lon: '&lat=37.902222&lon=139.023605'},
  {id: 2111149, name: 'Sendai', show: '仙台', lat_lon: '&lat=38.26889&lon=140.871933'},
  {id: 1860243, name: 'Kanazawa', show: '金沢', lat_lon: '&lat=36.59444&lon=136.625565'},
  {id: 1862415, name: 'Hiroshima', show: '広島', lat_lon: '&lat=34.396271&lon=132.459366'},
  {id: 1856035, name: 'Naha', show: '那覇', lat_lon: '&lat=26.2125&lon=127.681107'},
  {id: 1859146, name: 'Kouchi', show: '高知', lat_lon: '&lat=33.559719&lon=133.531113'},
  {id: 1853908, name: 'Osaka', show: '大阪', lat_lon: '&lat=35.950001&lon=137.266663'},
  {id: 1856057, name: 'Nagoya', show: '名古屋', lat_lon: '&lat=35.181469&lon=136.906403'},
  {id: 1863967, name: 'Fukuoka', show: '福岡', lat_lon: '&lat=33.606392&lon=130.41806'},
  {id: 1860827, name: 'Kagoshima', show: '鹿児島', lat_lon: '&lat=31.560181&lon=130.558136'},
  {id: 2113126, name: 'Akita', show: '秋田', lat_lon: '&lat=39.716671&lon=140.116669'},
];

export default JapanArea;