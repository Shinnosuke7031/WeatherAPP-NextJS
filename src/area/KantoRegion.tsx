interface TypeKanto {
  id: number;
  name: string;
  show: string;
  lat_lon: string;
}
const KantoRegion: TypeKanto[] = [
                                  {id: 1850147, name: 'Tokyo', show: '東京', lat_lon: '&lat=35.681236&lon=139.767125'},
                                  {id: 1849053, name: 'Utsunomiya', show: '宇都宮', lat_lon: '&lat=36.56583&lon=139.883606'},
                                  {id: 2111901, name: 'Mito', show: '水戸', lat_lon: '&lat=36.341389&lon=140.446671'},
                                  {id: 1857843, name: 'Maebashi', show: '前橋', lat_lon: '&lat=36.391109&lon=139.060837'},
                                  {id: 6940394, name: 'Saitama', show: 'さいたま', lat_lon: '&lat=35.90807&lon=139.65657'},
                                  {id: 1848354, name: 'Yokohama', show: '横浜', lat_lon: '&lat=35.447781&lon=139.642502'},
                                  {id: 2113015, name: 'Chiba', show: '千葉', lat_lon: '&lat=35.604721&lon=140.123337'},
                                 ];
export default KantoRegion;
