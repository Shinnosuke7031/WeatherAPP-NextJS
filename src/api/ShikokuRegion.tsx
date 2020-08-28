interface TypeShikoku {
  id: number;
  name: string;
  show: string;
  lat_lon: string;
}
const ShikokuRegion: TypeShikoku[] = [
  {id: 1850158, name: 'Tokushima', show: '徳島', lat_lon: '&lat=34.06583&lon=134.559433'},
  {id: 1851100, name: 'Takamatsu', show: '高松', lat_lon: '&lat=34.68631&lon=134.043335'},
  {id: 1857910, name: 'Matsuyama', show: '松山', lat_lon: '&lat=34.340279&lon=135.753845'},
  {id: 1859146, name: 'Kochi', show: '高知', lat_lon: '&lat=33.559719&lon=133.531113'},
];

export default ShikokuRegion;