import './App.css'
import NavBar from './components/NavBar';


function App() {
    return (
      <div className="App">
        <h1>Happy Days!</h1>
        <h1>this is valid</h1>
        {/* <NavBar name={'Blue'}/>
        <NavBar name={'Orange'}/> */}
        {/* => NavBar() */}

<footer>
    <h1>R & S nights and weekends</h1>
    <table>
{/*  <thead> = "table head" and is used to group the header content in a table. It is a container for one or more <tr> elements that contain header cells (<th> elements) representing column or row headers. */}
        <thead>
            <tr>Students</tr>
        </thead>
{/* <tbody> stands for "table body" and is used to group the main content of a table. It is a container for one or more <tr> elements that contain table data cells (<td> elements) */}
        <tbody>
{/* td is a selector that stands for "table cell." It is used to apply styles to the <td> elements in an HTML table, which represent individual cells in the table. */}
            <td>Judy</td>
            <td>Kenyetta</td>
        </tbody>
    </table>
</footer>

    </div>
    );
}

    export default App;

    // pascal case = inti caps no space between words ex: JellyFish
    // functional component