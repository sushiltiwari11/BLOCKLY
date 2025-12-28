/**
 * app.js - Core logic for the Blockly Custom Blocks Demo
 * Requirements: Modular code, ES6+ syntax [cite: 17, 18]
 */

// 1. Define the Toolbox (This is the sidebar menu)
// We include the standard Logic/Math categories and your Custom Smart Home category 
const toolbox = {
    "kind": "categoryToolbox",
    "contents": [
        {
            "kind": "category",
            "name": "Logic",
            "colour": "%{BKY_LOGIC_HUE}",
            "contents": [
                { "kind": "block", "type": "controls_if" },
                { "kind": "block", "type": "logic_compare" },
                { "kind": "block", "type": "logic_operation" },
                { "kind": "block", "type": "logic_boolean" }
            ]
        },
        {
            "kind": "category",
            "name": "Smart Home",
            "colour": "230",
            "contents": [
                { "kind": "block", "type": "smarthome_set_device" },
                { "kind": "block", "type": "smarthome_get_temp" },
                { "kind": "block", "type": "smarthome_wait" },
                { "kind": "block", "type": "smarthome_notification" },
                { "kind": "block", "type": "smarthome_schedule" },
                { "kind": "block", "type": "smarthome_alarm" }
            ]
        }
    ]
};

// 2. Initialize the Blockly Workspace [cite: 20]
const workspace = Blockly.inject('blocklyDiv', {
    toolbox: toolbox,
    trashcan: true,
    move: {
        scrollbars: true,
        drag: true,
        wheel: true
    },
    zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2
    }
});

// 3. UI Element References [cite: 21, 22, 23]
const generateBtn = document.getElementById('generateBtn');
const runBtn = document.getElementById('runBtn');
const clearBtn = document.getElementById('clearBtn');
const codePreview = document.getElementById('codePreview');
const outputDisplay = document.getElementById('outputDisplay');

// 4. Functionality: Generate Code Preview [cite: 9]
const updatePreview = () => {
    const code = javascript.javascriptGenerator.workspaceToCode(workspace);
    codePreview.textContent = code || "// Drag blocks here to see code...";
};

// Listen for workspace changes to update preview automatically
workspace.addChangeListener(updatePreview);

generateBtn.addEventListener('click', updatePreview);

// 5. Functionality: Run Generated Code [cite: 10, 12]
runBtn.addEventListener('click', () => {
    const code = javascript.javascriptGenerator.workspaceToCode(workspace);
    outputDisplay.innerHTML = ""; // Reset output

    if (!code) {
        outputDisplay.innerHTML = '<p style="color: orange;">⚠️ No code to run. Add some blocks first!</p>';
        return;
    }

    try {
        // Mock functions for our custom blocks to interact with
        const updateDeviceStatus = (device, status) => {
            outputDisplay.innerHTML += `<p>🏠 <b>${device.toUpperCase()}</b> is now <b>${status.toUpperCase()}</b>.</p>`;
        };
        const getRoomTemp = () => Math.floor(Math.random() * (30 - 18 + 1) + 18);
        const sendNotify = (msg) => {
            outputDisplay.innerHTML += `<p>📱 Notification: <i>"${msg}"</i></p>`;
        };

        // Create the execution environment [cite: 10]
        const executeFunction = new Function('updateDeviceStatus', 'getRoomTemp', 'sendNotify', code);
        
        // Execute [cite: 10]
        executeFunction(updateDeviceStatus, getRoomTemp, sendNotify);
        
    } catch (error) {
        // User-friendly error handling [cite: 12]
        outputDisplay.innerHTML = `<p style="color: red;">❌ Error: ${error.message}</p>`;
    }
});

// 6. Functionality: Clear Workspace [cite: 13]
clearBtn.addEventListener('click', () => {
    if (confirm("Are you sure you want to clear your workflow?")) {
        workspace.clear();
        outputDisplay.innerHTML = "Workspace cleared.";
        codePreview.textContent = "// JavaScript will appear here...";
    }
});
