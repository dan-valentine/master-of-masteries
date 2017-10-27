UPDATE lists
SET 
    title = $1,
    description= $2
WHERE 
    list_id = $3;
