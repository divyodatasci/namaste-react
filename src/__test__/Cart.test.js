import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import Cart from '../components/Cart';
import Header from '../components/Header';
import RestaurantMenu from '../components/RestaurantMenu';
import MOCK_DATA from '../mocks/mockResMenu.json';
import appStore from '../utils/appStore';
import { Provider } from 'react-redux';
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
    }));

it("Should load restaurant menu component", async() => {
    await act(async ()=>
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
                <Cart />
            </Provider>
        </BrowserRouter>
    ))
    const accordionHeader = screen.getByText("DOUBLE DOWN (5)");
    fireEvent.click(accordionHeader);
    expect(screen.getAllByTestId("foodItems").length).toBe(5)
    expect(screen.getByText("Cart ( 0 items)")).toBeInTheDocument();
    const addBtns = screen.getAllByRole("button", {name: "Add"});
    fireEvent.click(addBtns[0]);
    expect(screen.getByText("Cart ( 1 items)")).toBeInTheDocument();
    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart ( 2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("cartItem").length).toBe(2);
    fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));
    expect(screen.queryAllByTestId("cartItem").length).toBe(0);
})