import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const FetchData = (posi: string | string[]) => {
  
  const { data, error } = useSWR(`https://api.openweathermap.org/data/2.5/onecall?APPID=${process.env.WEATHER_API_KEY}&units=metric${posi}`, fetcher);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
  
}

export default FetchData;