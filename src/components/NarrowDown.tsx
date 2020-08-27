import Link from 'next/link';
import React, {useState, useEffect, useMemo} from 'react';

//import JapanArea from '../api/JapanArea';
import TouhokuRegion from '../api/TouhokuRegion';
import KantouRegion from '../api/KantoRegion';
import ChubuRegion from '../api/ChubuRegion';

interface TypeArea {
  id: number;
  name: string;
  show: string;
  lat_lon: string;
}
const ulStyle = {
  backgroundColor: "white",
}

const NarrowDown: React.FC = () => {

  const [allArea, setAllArea] = useState<TypeArea[]>([]);
  const [searchArea, setSearchArea] = useState<TypeArea[]>([]);
  const [filterQuery, setFilterQuery] = useState("");
  
  useEffect(() => {
    const area = [
      ...TouhokuRegion, ...KantouRegion, ...ChubuRegion
    ];
    setAllArea(area);
    setSearchArea(area);
  }, []);

  const filteredTask = useMemo<TypeArea[]>(()=>{
    let tmpArea = searchArea;

    tmpArea = tmpArea.filter(area => {
      return area.show.includes(filterQuery);
    });

    if (filterQuery === "") return [];
    else return tmpArea;

  }, [filterQuery]);

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    
    setFilterQuery(value); 
  };


  let show = filteredTask.length === 0 ? "" : 
                        <ul>
                          {filteredTask.map((city, index)=>(
                            <li key={index}>
                              <Link href="/posts/[name]/[lat_lon]" as={`/posts/${city.show}/${city.lat_lon}`}><a className={city.name}>{city.show}</a></Link>
                            </li>
                          ))}
                        </ul> ;
  

  return (
    <div className="NarrowDowncontainer">
      <div className="flex">
        <p>地名検索</p>
        <input type="text" name="inputValue" placeholder="ここに入力"
                          value={filterQuery}
                          onChange={handleFilter}
                          />
      </div>
      <div className="blank">
        {show}
      </div>
      <style jsx>{`
        input {
          width: 80px;
          margin: 0 auto;
          background-color: white !important;
          border: none;
          border: 1px solid black;
        }
        input:focus {
          outline: none;
          background-color: white !important;
        }
        .NarrowDowncontainer {
          margin: 20px auto;
          width: 100px;
        }
        .blank {
          margin: 0 auto;
          width: 100px;
          position: relative;
        }
        p {
          margin: 0;
          font-size: 13px;
        }
        .flex {
          display: flex;
          flex-direction: column;
          margin: 0 auto;
          text-align: center;
        }
      `}</style>
      <style jsx global>{`
        .NarrowDowncontainer ul {
          z-index: 2;
          width: 64px;
          position: absolute;
          top: 0px;
          left: 7px;
          background-color: white;
          list-style-type: none;
          padding: 10px;
          margin: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-bottom: 1px solid black;
          border-right: 1px solid black;
          border-left: 1px solid black;
        }
        .NarrowDowncontainer a {
          display: inline-block;
          color: black;
          text-decoration: none;
        }
        .NarrowDowncontainer li {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .NarrowDowncontainer li a {
          color: #05c;
          font-size: 13px;
        }
      `}</style>
    </div>
  );
}

export default NarrowDown;