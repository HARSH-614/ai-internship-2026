// --- Prompt Engineering Simulator Logic ---
const promptData = {
    basic: {
        type: "Zero-Shot Prompt",
        input: "Give me a diagram for water management.",
        output: "Generating a generic vector image of urban water treatment plants and rain harvesting pipes."
    },
    engineered: {
        type: "Role-Based Specific Prompt (C-R-I-S-P)",
        input: "Act as an expert hydrologist. Generate a precise diagram for traditional 'dong' water management techniques. Show the diversion of river water through traditional channels, bypassing generic urban imagery.",
        output: "Generating a detailed technical illustration of the 'dong' system, accurately mapping traditional river diversion pathways and agricultural integration."
    }
};

const promptInputDisplay = document.getElementById('prompt-input');
const aiOutputDisplay = document.getElementById('ai-output');
const promptTypeLabel = document.getElementById('prompt-type');
const toggleButton = document.getElementById('toggle-prompt-btn');

let isEngineered = false;

function updateSimulator() {
    const data = isEngineered ? promptData.engineered : promptData.basic;
    
    // Fade out
    promptInputDisplay.style.opacity = 0;
    aiOutputDisplay.style.opacity = 0;
    
    setTimeout(() => {
        promptTypeLabel.innerText = data.type;
        promptInputDisplay.innerText = data.input;
        aiOutputDisplay.innerText = data.output;
        toggleButton.innerText = isEngineered ? "Revert to Basic Prompt" : "Apply C-R-I-S-P Framework";
        
        // Fade in
        promptInputDisplay.style.opacity = 1;
        aiOutputDisplay.style.opacity = 1;
    }, 250);
}

toggleButton.addEventListener('click', () => {
    isEngineered = !isEngineered;
    updateSimulator();
});


// --- 3D Presentation Book Logic ---
const pages = document.querySelectorAll('.page');
let currentState = 1;
const maxState = pages.length + 1;

function initBook() {
    // Stack pages correctly so page 1 is on top
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.zIndex = pages.length - i;
    }
}

function goNextPage() {
    if (currentState < maxState) {
        const currentPage = document.getElementById(`p${currentState}`);
        currentPage.classList.add("flipped");
        
        // Swap z-index mid-animation so the back of the flipped page renders correctly over the left stack
        setTimeout(() => {
            currentPage.style.zIndex = currentState;
        }, 600); 
        
        currentState++;
    }
}

function goPrevPage() {
    if (currentState > 1) {
        currentState--;
        const previousPage = document.getElementById(`p${currentState}`);
        previousPage.classList.remove("flipped");
        
        // Immediately restore right-side stacking order before flipping back
        previousPage.style.zIndex = pages.length - currentState + 1;
    }
}

// Cursor blinking effect
setInterval(() => {
    const cursor = document.querySelector('.cursor');
    if(cursor) cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
}, 500);

// Initialize everything on load
window.onload = () => {
    updateSimulator();
    initBook();
};
