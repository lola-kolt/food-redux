import './App.css';
import Cart from './Components/CartSide/Cart';
import AllDishes from './Components/DishesSideComponet/AllDishes';
import AllFoodTypes from './Components/FilterSide/AllFoodTypes';

function App() {
    return(
        <div className='container'>
            <div className='topSide'>
                {/* FilterSide */}
                <div className='allFoodTypes'>
                    <AllFoodTypes />
                </div>
                {/* CartSide */}
                <div className='cart'>
                    <Cart />
                </div>
            </div>
            <div className='bottomSide'>
                {/* DishesSide */}
                <div className='allDishes'>
                    <AllDishes />
                </div>
                
            </div>
        </div>
    );
}

export default App;