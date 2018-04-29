 import React from 'react';

// This class component is not needed if there is no state
// class Header extends React.Component {
//   render() {
//     return (
// ...
//         <h3 className="tagline">
//           <span>{this.props.tagline}</span>
//         </h3>
// ...
//     );
//   }
// }

// You just need a 'stateless functional component' (using implicit return in this case)
//
// const Header = props => (
// ...
//       <h3 className="tagline">
//         <span>{props.tagline} {props.subTagLine}</span>
//       </h3>
// ...
// );
//
// this with the destructured arguments is the same as above.
const Header = ({tagline, subTagLine}) => (
    <header className="top">
      <h1>Catch
        <span className="ofThe">
          <span className="of">Of</span>
          <span className="the">The</span>
        </span>
        Day
      </h1>
      <h3 className="tagline">
        <span>{tagline} {subTagLine}</span>
      </h3>
    </header>
  )



export default Header;
