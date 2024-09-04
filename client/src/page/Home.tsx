import { useNavigate } from "react-router-dom"
export const Home = () => {

    const navigate = useNavigate()

    return (
        <main className="container">
            <h4 className="text-center mb-5     ">Juegos</h4>
            <div className="row">
                <div className="d-flex justify-content-center">
                    <h6 role="button" className="bg-dark text-white p-3 rounded-2" onClick={() => navigate('/emotion')}>Emociones</h6>

                </div>
            </div>
        </main>
    )
}