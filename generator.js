// Generator for the 'Turn On/Off' block
javascript.javascriptGenerator.forBlock['smarthome_set_device'] = function(block) {
  const status = block.getFieldValue('STATUS');
  const device = block.getFieldValue('DEVICE');
  // This generates a simple JS function call
  return `updateDeviceStatus('${device}', '${status}');\n`;
};

javascript.javascriptGenerator.forBlock['smarthome_get_temp'] = function(block) {
  // This returns the code and the "order" so it can be used inside other functions
  return ['getRoomTemp()', javascript.Order.ATOMIC];
};


/**
 * js/generator.js - Logic to turn blocks into ES6+ code [cite: 17]
 */

// 3. Notification Generator
javascript.javascriptGenerator.forBlock['smarthome_notification'] = function(block) {
  const msg = block.getFieldValue('MSG');
  return `sendNotify('${msg}');\n`;
};

// 4. Wait Generator
javascript.javascriptGenerator.forBlock['smarthome_wait'] = function(block) {
  const seconds = block.getFieldValue('SECONDS');
  return `// Waiting ${seconds}s...\n`; 
  // Note: For real async wait, you'd use a different runtime approach, 
  // but for this assignment, a comment or simple log suffices.
};

// 5. Alarm Generator
javascript.javascriptGenerator.forBlock['smarthome_alarm'] = function(block) {
  const type = block.getFieldValue('TYPE');
  return `sendNotify('ALARM TRIGGERED: ${type} mode!');\n`;
};

// 6. Schedule Generator
javascript.javascriptGenerator.forBlock['smarthome_schedule'] = function(block) {
  const time = block.getFieldValue('TIME');
  const branch = javascript.javascriptGenerator.statementToCode(block, 'DO');
  return `if (currentSchedule === '${time}') {\n${branch}}\n`;
};