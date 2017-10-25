var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p> Here are a few examples to try out: </p>

      <ol>
        <li>
          <Link to='/?location=Zamboanga'> Zamboanga </Link>
        </li>

        <li>
          <Link to='/?location=Sydney'> Sydney, NSW </Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
