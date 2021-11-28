import Header from './components/Header';
import RentalList from './components/RentalList';
import SearchBar from './components/SearchBar';

export default function App() {
    return (
        <div className="min-h-screen antialiased bg-gray-200">
            <Header />
            <div className="">
                <SearchBar className="" />
                <RentalList className="" />
            </div>
        </div>
    );
}
