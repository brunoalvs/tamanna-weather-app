export default function Locations() {
  return (
    <div>
      <h1>Locations</h1>

      <ul>
        <li>
          <p className="location-info">
            <span className="city-name">Lisbon</span>
            <span className="country">Portugal</span>
          </p>

          <p className="temperature">
            <span className="temperature-value">21</span>
            <span className="temperature-unit">°C</span>
          </p>
          <figure className="weather-icon">
            <img src="/icons/weather/sunny.svg" alt="weather icon" />
          </figure>
        </li>
      </ul>
    </div>
  )
}
