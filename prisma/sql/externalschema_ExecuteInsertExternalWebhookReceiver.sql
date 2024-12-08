-- @param {String}      $1:requestId
-- @param {String}      $2:eventDate
-- @param {Int}         $3:eventType
-- @param {Int}         $4:status
-- @param {Int}         $5:type
-- @param {String}      $6:version
-- @param {Json}        $7:payloadData
CALL externalschema.executeinsertexternalwebhookreceiver(
      $1::text,
      $2::timestamp,
      $3::int4,
      $4::int4,
      $5::int4,
      $6::text,
      $7::jsonb
      )