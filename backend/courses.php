<?php
// Nejprve povolit CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

// Preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit(0);
}
$url = "https://www.shopier.com/muditadanismanlik";

// Stáhnout stránku
$options = [
    "http" => [
        "header" => "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)\r\n"
    ]
];
$context = stream_context_create($options);
$html = file_get_contents($url, false, $context);

var_dump($html);die;
if (!$html) {
    http_response_code(500);
    echo json_encode(["error" => "Nepodařilo se stáhnout stránku."]);
    exit;
}

// Načíst HTML do DOMDocument
libxml_use_internal_errors(true);
$dom = new DOMDocument();
$dom->loadHTML($html);
libxml_clear_errors();

$xpath = new DOMXPath($dom);
$courses = [];

// Najít všechny produkty
foreach ($xpath->query("//div[contains(@class, 'product-item')]") as $product) {
    $titleNode = $xpath->query(".//div[contains(@class,'product-title')]", $product)->item(0);
    $priceNode = $xpath->query(".//div[contains(@class,'product-price')]", $product)->item(0);
    $linkNode  = $xpath->query(".//a", $product)->item(0);
    $imageNode = $xpath->query(".//img", $product)->item(0);

    $courses[] = [
        "title" => $titleNode ? trim($titleNode->nodeValue) : null,
        "price" => $priceNode ? trim($priceNode->nodeValue) : null,
        "link"  => $linkNode  ? $linkNode->getAttribute("href") : null,
        "image" => $imageNode ? $imageNode->getAttribute("src") : null
    ];
}

// Vrátit JSON přímo do fetch
echo json_encode($courses, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);