import {
    Heading,
    Container,
    Wrap,
} from '@chakra-ui/react';
import { Recruit } from "../components/Recruit";
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CoachIntroductionCard } from '../components/CoachIntroductionCard';
import { Subjects } from '../components/Subjects';


export function Curriculum() {
    return (
        <Container maxW={'7xl'} p="12">
            <div className="recruit">
                <Header />
            </div>

            <Heading color="gray.700" fontSize="3xl" fontFamily="body">
                コースを探す
            </Heading>

            <div className="subjects">
                <Subjects />
            </div>



            <Wrap p="6">
                {/* 講師紹介カード1 */}
                <div className="coach_introduction_card">
                    <CoachIntroductionCard />
                </div>

                {/* 講師紹介カード2 */}
                <div className="coach_introduction_card">
                    <CoachIntroductionCard />
                </div>

            </Wrap>

            <div className="recruit">
                <Recruit />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </Container>
    );
}

export default Curriculum;