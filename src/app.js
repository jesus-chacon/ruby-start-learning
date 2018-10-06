import React, {Component} from "react";

// COMPONENTS
import Navbar from "./components/navbar";
import GoogleTagManager from "./components/GoogleTagManager";

class App extends Component {
  render() {
    // or with all optional parameters
    const event = {platform: 'react-stack'}

    return (
      <div>
        <GoogleTagManager gtmId='GTM-TT9G3KZ' additionalEvents={event} />

        <Navbar />

        {this.props.children}
      </div>
    );
  }
}

export default App;