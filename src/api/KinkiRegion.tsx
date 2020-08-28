interface TypeKinki {
  id: number;
  name: string;
  show: string;
  lat_lon: string;
}
const KinkiRegion: TypeKinki[] = [
  {id: 1859171, name: 'Kobe', show: '神戸', lat_lon: '&lat=34.691299&lon=135.182999'},
  {id: 1853904, name: 'Osaka', show: '大阪', lat_lon: '&lat=34.68631&lon=135.519684'},
  {id: 1857910, name: 'Kyoto', show: '京都', lat_lon: '&lat=35.021069&lon=135.753845'},
  {id: 1855612, name: 'Nara', show: '奈良', lat_lon: '&lat=34.685051&lon=135.804855'},
  {id: 1853574, name: 'Otsu', show: '大津', lat_lon: '&lat=35.00444&lon=135.868332'},
  {id: 1849796, name: 'Tsu', show: '津', lat_lon: '&lat=34.730282&lon=136.508606'},
  {id: 1926004, name: 'Wakayama', show: '和歌山', lat_lon: '&lat=34.226109&lon=135.167496'},
];

export default KinkiRegion;