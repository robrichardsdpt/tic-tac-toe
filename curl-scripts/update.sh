curl "https://tic-tac-toe-api-production.herokuapp.com/games/:id" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${ID}" \
  --header "Content-Type: application/json" \
  --data '{
    "game": {
      "cell":{
        "index": "'"${INDEX}"'",
        "value": "'"${VALUE}"'"
      }
      "over": false
    }
  }'

echo
