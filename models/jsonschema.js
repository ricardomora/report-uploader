const schema = {
    "id": "/SimplePerson",
    "type": "object",
    "properties": {
      "ot_request_id": {
        "type": "string"
      },
      "asset_id": {
        "type": "string"
      },
      "intakeRequestId": {
        "type": "string"
      },
      "extract_start_date": {
        "type": "string"
      },
      "extract_end_date": {
        "type": "string"
      },
      "brand_code": {
        "type": "string"
      },
      "state_code": {
        "type": "string"
      },
      "country_code": {
        "type": "string"
      },
      "snow_request_id": {
        "type": "string"
      },
      "snow_task_id": {
        "type": "string"
      }
    },
    "required": ["ot_request_id", "asset_id", "intakeRequestId", "extract_start_date", "extract_end_date", "brand_code", "state_code", "country_code", "snow_request_id", "snow_task_id"]
  };

module.exports = schema;
