// Data structure holding the prompt engineering examples
const promptData = {
    basic: {
        type: "Zero-Shot Prompt",
        input: "Give me a diagram for water management.",
        output: "Here is a generic diagram showing standard urban water treatment and basic rain harvesting methods. [Shows generic vector image of a water tower and pipes]"
    },
    engineered: {
        type: "Role-Based & Highly Specific Prompt",
        input: "Act as an expert hydrologist and technical illustrator. Generate a precise, detailed diagram specifically for traditional 'dong' water management techniques. Ensure the visual clearly maps the diversion of river water through traditional channels, bypassing generic urban water management imagery.",
        output: "Here is a detailed technical illustration of the 'dong' water management system. [Shows accurate visual representation of traditional river diversion channels, flow pathways, and agricultural integration]."
    }
};

// DOM Elements
const promptInputDisplay = document.getElementById('prompt-input');
const aiOutputDisplay = document.getElementById('ai-output');
const promptTypeLabel = document.getElementById('prompt-type');
const toggleButton = document.getElementById('toggle-prompt-btn');

let isEngineered = false;

// Function to update the UI
function updateSimulator() {
    const data = isEngineered ? promptData.engineered : promptData.basic;
    
    // Add a slight fade effect for transition
    aiOutputDisplay.style.opacity = 0;
    
    setTimeout(() => {
        promptTypeLabel.innerText = data.type;
        promptInputDisplay.innerText = data.input;
        aiOutputDisplay.innerText = data.output;
        
        // Dynamic button text
        toggleButton.innerText = isEngineered ? "Revert to Basic Prompt" : "Apply C-R-I-S-P Framework";
        
        aiOutputDisplay.style.opacity = 1;
    }, 300);
}

// Event Listener
toggleButton.addEventListener('click', () => {
    isEngineered = !isEngineered;
    updateSimulator();
});

// Initialize the simulator on page load
window.onload = updateSimulator;
