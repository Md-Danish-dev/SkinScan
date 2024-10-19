import Navbar from "../HomePage/Navbar";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Footer from "../Footer/Footer";

export default function Blog() {
    const class_names = [
        'Acne & Rosacea',
        'Malignant Skin Lesions (Actinic Keratosis, Basal Cell Carcinoma)',
        'Atopic Dermatitis',
        'Bacterial Infections (Cellulitis, Impetigo)',
        'Eczema',
        'Exanthems & Drug-Induced Eruptions',
        'Herpes, HPV & Other STDs',
        'Pigmentation Disorders & Light Diseases',
        'Lupus & Connective Tissue Diseases',
        'Melanoma, Nevi & Moles',
        'Contact Dermatitis (e.g., Poison Ivy)',
        'Psoriasis, Lichen Planus & Related Conditions',
        'Benign Tumors (Seborrheic Keratoses)',
        'Systemic Diseases',
        'Fungal Infections (Tinea, Candidiasis)',
        'Urticaria (Hives)',
        'Vascular Tumors',
        'Vasculitis',
        'Viral Infections (Warts, Molluscum)'
    ];

    const DemoPaper = styled(Paper)(({ theme }) => ({
        width: '100%', // Make the DemoPaper full width
        maxWidth: '700px', // Optional: Set a max width for larger screens
        height: 'auto', // Allow the height to adjust based on content
        padding: theme.spacing(2),
        ...theme.typography.body2,
        textAlign: 'center',
        background: 'linear-gradient(to right, #0056b3, #00aaff)', // Darker blue gradient
        color: '#ffffff', // Change text color to white for better contrast
        borderRadius: '8px', // Optional: Adds rounded corners
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional: Adds subtle shadow
        margin: theme.spacing(1), // Adds margin for spacing between DemoPaper components
    }));

    return (
        <div>
            <Navbar />
            {/* Add padding-top to avoid content being hidden behind the navbar */}
            <div className="mt-16">
                <header className="text-center py-8 bg-gray-900">
                    <h1 className="text-4xl font-bold text-white">About our Health-Tech Project</h1>
                </header>
                <div className="bg-gray-900 p-6 flex flex-col items-center"> {/* Center items vertically */}
                    <div className="flex flex-col lg:flex-row lg:justify-around w-full max-w-6xl"> {/* Ensure DemoPaper fits in the parent container */}
                        <DemoPaper>
                            <p className="text-2xl font-bold">List of diseases included in our analysis</p>
                            <ul className="text-2xl">
                                {
                                    class_names.map((name, index) => (
                                        <li key={index} className="text-lg text-white">{name}</li>
                                    ))
                                }
                            </ul>
                        </DemoPaper>
                        <DemoPaper square={false}>
                            <p className="text-2xl">
                                In the ever-evolving field of dermatology, artificial intelligence (AI) has emerged as a powerful tool to assist in the detection and diagnosis of skin diseases. Our AI model has been trained to recognize 19 distinct skin conditions, ranging from common ailments like Acne and Eczema to more serious issues like Malignant Skin Lesions and Melanoma. By analyzing images of affected skin areas, the model can rapidly identify potential conditions with remarkable accuracy, offering an initial assessment that can guide healthcare professionals in their diagnostic process.
                            </p>
                        </DemoPaper>
                        <DemoPaper square={false}>
                            <p className="text-2xl">
                                The AI model's classification capabilities span a wide spectrum of skin diseases, including bacterial infections such as Cellulitis, viral infections like Warts, and autoimmune conditions such as Lupus and Psoriasis. Each condition presents unique challenges in diagnosis, particularly in early stages, where visual cues may be subtle or overlap with other disorders. Our model leverages a vast dataset of annotated skin images, allowing it to discern these fine differences and make informed predictions.
                            </p>
                        </DemoPaper>
                        <DemoPaper square={false}>
                            <p className="text-2xl">
                                This innovation not only enhances the speed of diagnosis but also democratizes access to specialized dermatological care. In regions where dermatologists are scarce, such an AI model can serve as an invaluable tool, empowering general practitioners and even patients to recognize potential skin conditions early. Early detection can significantly improve treatment outcomes, especially for conditions like skin cancer, where timely intervention is critical.
                            </p>
                        </DemoPaper>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}