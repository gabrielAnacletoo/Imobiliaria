import Nav from '../../components/Headers/Nav';
import * as S from '../../assets/Styles/Styles';
import Footer from '../../components/Footer/Footer';


const Register = () => {
    return (
        <>
        <Nav />
        <S.BadgeRegister>
            <p>CADASTRAR</p>
        </S.BadgeRegister>

        <S.FormRegister>           
        <S.FormDiv>
        <p> CRIAR NOVA CONTA.</p>

        <input type="text" placeholder='Nome'/>
        <input type="text" placeholder='Sobrenome'/>
        <input type="text" placeholder='E-mail'/>
        <input type="text" placeholder='Confirmar E-mail'/>
        <input type="text" placeholder='Senha'/>
        <input type="text" placeholder='Confirmar Senha'/>
        
        <button>Cadastrar</button>
        </S.FormDiv>
        </S.FormRegister>
        
        <Footer />
        </>
    )
}

export default Register;