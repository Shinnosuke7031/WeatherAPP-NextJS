interface TypeChugoku {
  id: number;
  name: string;
  show: string;
  lat_lon: string;
}
const ChugokuRegion: TypeChugoku[] = [
  {id: 1849892, name: 'Tottori', show: '鳥取', lat_lon: '&lat=35.5&lon=134.233337'},
  {id: 1857550, name: 'Matsue', show: '松江', lat_lon: '&lat=35.472221&lon=133.050568'},
  {id: 1854383, name: 'Okayama', show: '岡山', lat_lon: '&lat=34.661671&lon=133.9349985'},
  {id: 1862415, name: 'Hiroshima', show: '広島', lat_lon: '&lat=34.396271&lon=132.459366'},
  {id: 1848689, name: 'Yamaguchi', show: '山口', lat_lon: '&lat=34.185829&lon=131.47139'},
];

export default ChugokuRegion;