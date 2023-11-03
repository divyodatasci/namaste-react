import {fireEvent, render,screen} from "@testing-library/react"
import RestaurantCard, {withPromotedLabel} from "../components/RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import MOCK_RESLIST_DATA from "../mocks/mockResListData.json";
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom";
import { act } from 'react-dom/test-utils';
import Body from '../components/Body';
jest.mock('../utils/constant', () => ({
    RES_LOGO_URL: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/",
  }));
  
it("should render RestaurantCard Component with props Data", () => {
    render(
    <BrowserRouter>
        <RestaurantCard resData={MOCK_DATA} />
    </BrowserRouter>);
    const name = screen.getByText("The Fritter Company");
    expect(name).toBeInTheDocument();
});

it("should render RestaurantCard Component with promoted label", () => {
    const PromotedComponent = withPromotedLabel(RestaurantCard);
    render(
    <BrowserRouter>
            <PromotedComponent resData={MOCK_DATA} />
    </BrowserRouter>);
    const label = screen.getByText("Promoted");
    expect(label).toBeInTheDocument();
});

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_RESLIST_DATA);
        }
    });
});

it("Should render the Body Component with Search", async() => {
    await act (async () => render (
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ));
    const searchBtn = screen.getByRole("button", {name: "Search"});
    console.log('search button',searchBtn);
    expect(searchBtn).toBeInTheDocument();
});

it("Should Search Res list for burger text input", async() => {
    await act (async () => render (
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ));

    const cardsBeforeSearch = screen.getAllByTestId('resCard');
    console.log('length ',cardsBeforeSearch.length)
    expect(cardsBeforeSearch.length).toBe(10);
    const searchfield = screen.getByTestId('searchInput');
    fireEvent.change(searchfield, {target: {value:'Temperature'}});
    const searchBtn = screen.getByRole("button", {name: "Search"});
    expect(searchBtn).toBeInTheDocument();
    fireEvent.click(searchBtn);
    const cardsAfterSearch = screen.getAllByTestId('resCard');
    expect(cardsAfterSearch.length).toBe(1);
});

it("Should filter Top Rated Restaurants", async() => {
    await act (async () => render (
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ));

    const cardsBeforeFilter = screen.getAllByTestId('resCard');
    expect(cardsBeforeFilter.length).toBe(10);;
    const filterBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});
    expect(filterBtn).toBeInTheDocument();
    fireEvent.click(filterBtn);
    const cardsAfterFilter = screen.getAllByTestId('resCard');
    console.log('cardsAfterFilter', cardsAfterFilter)
    expect(cardsAfterFilter.length).toBe(6);
});
