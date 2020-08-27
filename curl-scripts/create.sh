curl "https://tic-tac-toe-api-production.herokuapp.com/create" \
  --include \
  --request POST \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{}'

echo
