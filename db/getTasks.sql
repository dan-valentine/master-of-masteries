SELECT * 
FROM lists 
WHERE user_id = $1
ORDER BY 
    completed ASC, 
    list_id ASC; 