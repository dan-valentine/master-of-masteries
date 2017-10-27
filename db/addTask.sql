INSERT INTO lists
(
    user_id, 
    title, 
    description,
    completed
)
VALUES 
(
    $1,
    $2,
    '',
    false
);