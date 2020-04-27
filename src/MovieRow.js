import React from 'react'

class MovieRow extends React.Component{

    render() {
        return <table key={this.props.movie.id} className = "searchResults">
        <tbody>
          <tr className = "searchResultRow">
            <td>
              <img alt = "poster" width = "50" src = {this.props.movie.poster_src}/> 
            </td>
            <td className = "searchResultRow">
              <p>{this.props.movie.title}</p>
              <p>{this.props.movie.release_date}</p>
              <input type = "button"  value="Select"/>
            </td>
            <td>
              <p>{this.props.movie.overview}</p>
            </td>
          </tr>
        </tbody>
      </table>
    }
}

export default MovieRow