interface TypeTouhoku {
  id: number;
  name: string;
  show: string;
  lat_lon: string;
}
const TouhokuRegion: TypeTouhoku[] = [
                                  {id: 2130658, name: 'Aomori', show: '青森', lat_lon: '&lat=40.82444&lon=140.740005'},
                                  {id: 2111834, name: 'Morioka', show: '盛岡', lat_lon: '&lat=39.703609&lon=141.152496'},
                                  {id: 2111149, name: 'Sendai', show: '仙台', lat_lon: '&lat=38.26889&lon=140.871933'},
                                  {id: 2113126, name: 'Akita', show: '秋田', lat_lon: '&lat=39.716671&lon=140.116669'},
                                  {id: 2110556, name: 'Yamagata', show: '山形', lat_lon: '&lat=38.240559&lon=140.363327'},
                                  {id: 2112923, name: 'Fukushima', show: '福島', lat_lon: '&lat=37.75&lon=140.467773'},
                                 ];
export default TouhokuRegion;