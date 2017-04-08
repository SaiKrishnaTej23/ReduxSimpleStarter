import React, {Component} from 'react';

class SearchBar extends Component{

      constructor(props){
        super(props);
        this.state = {term: '' }
      }

      render() {
          return(
            <nav className="navbar fixed-top navbar-toggleable-md navbar-inverse bg-danger ">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">Youtube</a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline col-lg-12 my-2 my-lg-0" >
                          <div className="col-lg-6">
                                <div className="input-group">
                                 <input type="text" className="form-control"  onChange={event => this.onInputChange(event.target.value)}  placeholder="Search for..." />
                                 <span className="input-group-btn">
                                    <button className="btn btn-secondary" type="button">Search</button>
                                 </span>
                         </div>
                    </div>
                    </form>
                </div>
            </nav>
         );
      }

      onInputChange(term){
          this.setState({term});
          this.props.onSearchTermChange(term);
      }
}


export default SearchBar;
