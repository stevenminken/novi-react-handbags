import React from 'react';
import './App.css';
import Button from "./components/Button.js";
import Product from "./components/Product.js";
import Tile from "./components/Tile.js";


function App() {

    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button textValue="to the collection" buttonId="button1"/>
                <Button textValue="shop all bags" buttonId="button2"/>
                <Button textValue="pre-orders" buttonId="button3" disabled/>
            </nav>
            {/*    // Image path doet het niet, alle mogelijkheden getest*/}
            <main>
                <Product header="Best Seller" imageLocation="src/assets/bag_1.png" alt="tas 1" description="The handy bag"
                         price="E400-"/>
                <Product header="Best Seller" imageLocation="./assets/bag-2.png" alt="tas 2" description="The stylish bag"
                         price="E250-"/>
                <Product header="New Collection" imageLocation="bag-3.png" alt="tas 3"
                         description="The simple bag" price="E200-"/>
                <Product header="New Collection" imageLocation="bag-4" alt="tas 4"
                         description="The trendy bag" price="E150-"/>
            </main>

            <footer>
                <Tile
                    image=""
                    title="The Brand"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus iusto necessitatibus neque nesciunt optio? Consectetur dolore
                    doloribus illo labore nam perferendis quaerat tempore, ullam voluptatibus."
                />
                <Tile
                    image="./assets/brand.png"
                    title=""
                    text=""
                />
                <Tile
                    image=""
                    title="Our Story"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus iusto necessitatibus neque nesciunt optio? Consectetur dolore
                    doloribus illo labore nam perferendis quaerat tempore, ullam voluptatibus."
                />
                <Tile
                image="./assets/our_story.png"
                title=""
                text=""
            />

            </footer>
        </>
    );
}

export default App;



