import React from "react";

const Weather = props => (
	<div className="weather__info">
	 {	
	 	props.city && props.country && <div className="weather__key"> Location: 
	 		<span className="weather__value"> { props.city }, { props.country }</span>
	 	</div> 
	 }
	 { 	
	 	props.temperature && <div className="weather__key"> Temperature: 
	 		<span className="weather__value"> { props.temperature }	</span>
	 	</div> 
   }
   { 	
	 		props.temperature  && <div className="weather__key"> minimum temperature: 
	 		<span className="weather__value"> { props.min_temp }	</span>
	 	</div> 
   }
   { 	
	 		props.temperature && <div className="weather__key"> maximum temperature: 
     <span className="weather__value"> { props.max_temp }	</span>
   </div> 
   }
   { 	
	 		props.city && props.country  && <div className="weather__key"> It feels like: 
	 		<span className="weather__value"> { props.feels_like } here	</span>
	 	</div> 
   }
   { 	
	 		props.city && props.country && <div className="weather__key"> The pressure is : 
	 		<span className="weather__value"> { props.pressure }	</span>
	 	</div> 
   }
   { 	
	 	props.city && props.country  && <div className="weather__key"> The wind is blowing at : 
	 		<span className="weather__value"> { props.wind_speed } km/h	</span>
	 	</div> 
   }
     { 	
	 		props.city && props.country  && <p className="weather__key"> Direction of wind is : 
	 		<span className="weather__value"> { props.wind_direction} degree	</span>
	 	</p> 
	 }
	 { 	
	 	props.humidity && <p className="weather__key"> Humidity: 
	 		<span className="weather__value"> { props.humidity } </span>
	 	</p> 
	 }
	 { 	
	 	props.description && <p className="weather__key"> Conditions: 
	 		<span className="weather__value"> { props.description } </span>
	 </p> 
	 }
	 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }
	</div>
);

export default Weather;
