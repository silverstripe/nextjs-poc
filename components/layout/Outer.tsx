import React, { useContext } from 'react';
import Container from './Container';
import Navigation from '../navigation/Navigation';
import SilverstripeContext from '../context/Silverstripe';

interface Props { }

const Outer: React.FC<Props> = ({ children }) => {
    const state = useContext(SilverstripeContext);

    return <>
        <header className="bg-gray-300 pt-5">
            <Container>
                <div className="mb-4">
                    <img src="/images/logo.svg" alt="ACME" />
                </div>

                <div className="mt-6 text-lg">
                    <Navigation ariaLabel="Main navigation" items={state.global.navigation} />
                </div>
            </Container>
        </header>
        <main className="flex-grow pb-16">
            {children}
        </main>
        <footer className="bg-gray-300 py-16">
            <Container>
                <p>&copy; 2020 Acme Corporation</p>
            </Container>
        </footer>
    </>
};

export default Outer;
