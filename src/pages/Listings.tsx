import Header from '../components/Header';
import RentalList from '../components/RentalList';
import SearchBar from '../components/SearchBar';

export default function Listings() {
    return (
        <div className="min-h-screen antialiased bg-gray-200 xl:flex xl:flex-col xl:h-screen">
            <Header className="xl:flex-shrink-0" />
            <div className="xl:flex xl:flex-1 xl:overflow-y-hidden">
                <SearchBar className="xl:w-72" />
                <RentalList className="xl:w-full" />
            </div>
        </div>
    );
}
