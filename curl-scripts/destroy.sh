curl "https://tic-tac-toe-api-production.herokuapp.com/games/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}" \

echo
