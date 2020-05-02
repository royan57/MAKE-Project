import React from 'react'


class MovieRow extends React.Component{

// When called upon, this renders a table containing the movie poster next to its title, release Date, and overview
    render() {
        return <table key={this.props.movie.id} className = "searchResults">
        <tbody>
          <tr className = "searchResultRow">
            <td>
              <img alt = "poster" id = "movieposter" width = "50" src = {this.props.movie.poster_src}/> 
            </td>
            <td className = "searchResultRow">
              <p>{this.props.movie.title}</p>
              <p>{this.props.movie.release_date}</p>
              {/* Add onClick value to button to select image to go onto the poster position */}
              <input type = "button" value="Select"/>
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