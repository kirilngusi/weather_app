const App_ID = 'a6f275c1c5fcf63200ec318f00acdbc0';
export const constructUrl = (city:string) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${App_ID}&units=metric`;

