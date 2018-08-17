SELECT DISTINCT id, pageorder, page_number FROM comics
WHERE volume_id = $1
ORDER BY pageorder;