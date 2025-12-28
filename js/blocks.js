// Example: A block to 'Turn On' a specific device
Blockly.Blocks['smarthome_set_device'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn")
        .appendField(new Blockly.FieldDropdown([["ON","on"], ["OFF","off"]]), "STATUS")
        .appendField("the")
        .appendField(new Blockly.FieldDropdown([["Light","light"], ["Fan","fan"], ["AC","ac"]]), "DEVICE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Changes the status of a home device.");
    this.setHelpUrl("");
  }
};

// Example: A block to check Temperature
Blockly.Blocks['smarthome_get_temp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Current Temperature (°C)");
    this.setOutput(true, "Number");
    this.setColour(160);
    this.setTooltip("Returns the current room temperature.");
  }

  
};

/**
 * js/blocks.js - Definitions for 6 Custom Blocks
 * Requirements: Proper validation, connections, and visual appeal [cite: 5, 6]
 */

// 1 & 2 (Previously defined: set_device and get_temp)

// 3. Notification Block
Blockly.Blocks['smarthome_notification'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Send Notification:")
        .appendField(new Blockly.FieldTextInput("Hello!"), "MSG");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("Displays a message in the results panel.");
  }
};

// 4. Wait/Delay Block
Blockly.Blocks['smarthome_wait'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Wait")
        .appendField(new Blockly.FieldNumber(1, 0), "SECONDS")
        .appendField("seconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip("Pauses execution for a set time.");
  }
};

// 5. Alarm/Alert Block
Blockly.Blocks['smarthome_alarm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("🚨 Trigger Alarm")
        .appendField(new Blockly.FieldDropdown([["Silent","silent"], ["Loud","loud"]]), "TYPE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0); // Red color for urgency
    this.setTooltip("Triggers a home security alarm.");
  }
};

// 6. Schedule Block (Wrapper)
Blockly.Blocks['smarthome_schedule'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("At")
        .appendField(new Blockly.FieldDropdown([["Morning","morning"], ["Evening","evening"], ["Night","night"]]), "TIME");
    this.appendStatementInput("DO")
        .setCheck(null)
        .appendField("do");
    this.setColour(290);
    this.setTooltip("Schedules actions for a specific time of day.");
  }
};

