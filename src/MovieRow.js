import React from 'react'

class MovieRow extends React.Component {
  viewMovie() {
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url
  }

  render() {
    return <table className="search-results" key={this.props.movie.id}>
    <tbody className="search-body">
      <tr className="table-row">
        <td className="table">
          <img alt="poster" width="120" src={this.props.movie.poster_src}/>
        </td>
        <td className="info">
          <h3>{this.props.movie.title}</h3>
          <p>{this.props.movie.overview}</p>
          <input className="button" type="button" onClick={this.viewMovie.bind(this)} value="View Info"/>
        </td>
      </tr>
    </tbody>
  </table>
  }
}

export default MovieRow;
