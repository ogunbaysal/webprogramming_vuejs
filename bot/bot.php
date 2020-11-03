<?php
function is_cli()
{
    if( defined('STDIN') )
    {
        return true;
    }

    if( empty($_SERVER['REMOTE_ADDR']) and !isset($_SERVER['HTTP_USER_AGENT']) and count($_SERVER['argv']))
	{
        return true;
    }

	return false;
}
if(!is_cli()) die("Lütfen Komut Satınında Çalıştırınız!");
ini_set('display_errors',0);
error_reporting(E_ERROR | E_PARSE);
require 'vendor/autoload.php';

use \Curl\Curl;

$curl = new Curl();
$url = "https://www.trendyol.com/";

class Bot{
    private $db;
    public $base_url;
    public $products = [];
    public function __construct()
    {
        $this->base_url = "https://www.trendyol.com/";
    }

    private function httpPost($url,$params) {
        $postData = '';
        foreach($params as $k => $v) {
            $postData .= $k . '='.$v.'&';
        }
        rtrim($postData, '&');

        $ch = curl_init();
        curl_setopt($ch,CURLOPT_URL,$url);
        curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            "Content-Type"=> "application/x-www-form-urlencoded"
        ));
        curl_setopt($ch, CURLOPT_POST, count($postData));
        curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);

        $output=curl_exec($ch);

        curl_close($ch);
        return $output;
    }
    private function httpGet($url) {
        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, 'https://www.trendyol.com/');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');

        curl_setopt($ch, CURLOPT_ENCODING, 'gzip, deflate');

        $headers = array();
        $headers[] = 'Authority: www.trendyol.com';
        $headers[] = 'Pragma: no-cache';
        $headers[] = 'Cache-Control: no-cache';
        $headers[] = 'Upgrade-Insecure-Requests: 1';
        $headers[] = 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36';
        $headers[] = 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9';
        $headers[] = 'Sec-Fetch-Site: same-origin';
        $headers[] = 'Sec-Fetch-Mode: navigate';
        $headers[] = 'Sec-Fetch-User: ?1';
        $headers[] = 'Sec-Fetch-Dest: document';
        $headers[] = 'Referer: https://www.trendyol.com/diva-optik/butikdetay/537584';
        $headers[] = 'Accept-Language: en-US,en;q=0.9,tr;q=0.8';
        $headers[] = 'Cookie: __cfduid=d5ae8424790d6c6ad855c552341bea58d1602322303; AbTesting=57; WebAbTesting=A_77,B_13,C_78,D_45,E_11,F_48,G_87,H_49,I_15,J_49,K_67,L_68,M_42,N_31,O_37,P_84,Q_71,R_39,S_4,T_50,U_71,V_100,W_70,X_81,Y_60,Z_54; hvtb=1; _gcl_au=1.1.214660026.1602322305; COOKIE_TY.Anonym=tx=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cm46dHJlbmR5b2w6YW5vbmlkIjoiYTEwODgzYzdiYjMxNDdmNjkxZjExMmNlNmU3ZTAzMzQiLCJhdHdydG1rIjoiZGY1ZTI2MDEtYzc2ZS00Y2E5LWIzNGYtOGRjMmY3ZDFiMDhkIiwiaXNzIjoiYXV0aC50cmVuZHlvbC5jb20iLCJhdWQiOiJzYkF5ell0WCtqaGVMNGlmVld5NXR5TU9MUEpXQnJrYSIsImV4cCI6MTc2MDEwNzA2NCwibmJmIjoxNjAyMzIyMzA0fQ.WQt2jYMzHs3fS6aAewFkiE1EbumbsadyM75UWG2A2B8&RefreshToken=49a3cb2c-4888-4239-9a6d-46b32f84b7b9; utmSourceLT30d=direct; utmMediumLT30d=not set; utmCampaignLT30d=not set; utmSource30d=direct; utmMedium30d=not set; utmCampaign30d=not set; utmCampaign30dtemp2=not set; utmSource30dtemp2=direct; utmMedium30dtemp2=not set; pid=qg5jOIbtqK; _ym_uid=1596561087573565942; _ym_d=1602587572; COOKIE_UserAlreadyLogged=x=1&pp=gmzZ7qH19gWXfdueTp3NLhm5Eyg=&tx=M/4GapSz2yrWG8Q2wD2zwOx/sMM=; COOKIE_TY.HasSeenNotificationPreferencePopup=true; utmSourceGO5d=direct; utmMediumGO5d=not set; utmCampaignGO5d=not set; SiteHash=x=COOKIE_&pp=ItMm4t5HRy+PG0lVAIiFr6/xslY=&tx=mqeBMUEemR+CB9vIkC5iMa6+zgk=; COOKIE_CookieLawInformationPermission=x=approved&pp=eOWKP5HYFPi9+nsZEeb8cku+ioE=&tx=FbIg+nP+KEAU2MAfqy+8mktAZCE=; COOKIE_TY.IsUserAgentMobileOrTablet=false; VisitCount=20; SearchMode=0; NSC_IUUQT-XXX.USFOEZPM.DPN=ffffffff0908145e45525d5f4f58455e445a4a42378b; __cfruid=9eed1fb2a943aa2e0aa63e8829a8855b7c8dd096-1604164758; userid=undefined; sid=OOWoFZ9MVo; _gid=GA1.2.1327433976.1604164761; _ym_isad=1; trendyolv0=1; _ga_8F2NHTRF7T=GS1.1.1604164760.19.1.1604165441.55; _ga=GA1.1.1664974433.1602322305';
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

        $result = curl_exec($ch);
        if (curl_errno($ch)) {
            echo 'Error:' . curl_error($ch);
        }
        curl_close($ch);
        return $result;
    }

    public function getCategories($url, $params = []){
        $data = [];
        $res = $this->httpGet($this->base_url . $url);
        $doc = new DOMDocument();
        @$doc->loadHTML($res);
        $xpath = new DOMXPath($doc);
        $slugify = new Cocur\Slugify\Slugify();
        $parents = $xpath->query('//*[@id="navigation-wrapper"]/nav/ul/li');
        foreach ($parents as $parent) {
            $parent_title = $parent->childNodes[0]->textContent;
            $tmp = [
                'title' => $parent_title,
                'slug' => $slugify->slugify($parent_title),
                'children' => []
            ];
            $children = $parent->childNodes[1]->childNodes[0]->childNodes[0]->childNodes;
            foreach ($children as $level2){
                $base2 = $level2->childNodes[0];
                $level2_title = $base2->childNodes[0]->textContent;
                $tmp2 = [
                    'title' => $level2_title,
                    'slug' => $slugify->slugify($parent_title . '-' . $level2_title),
                    'children' => []
                ];
                $children2 = $base2->childNodes[1]->childNodes;
                foreach ($children2 as $level3){
                    $level3_title = $level3->childNodes[0]->textContent;
                    $products = $this->getProducts($level3->childNodes[0]->getAttribute('href'));
                    $tmp2['children'][] = [
                        'title' => $level3_title,
                        'slug' => $slugify->slugify($parent_title. '-'.$level2_title. '-'.$level3_title),
                        'products' => $products
                    ];
                }
                $tmp['children'][] = $tmp2;
            }
            $data[] = $tmp;
        }
        $json = json_encode($data, JSON_UNESCAPED_UNICODE);
        $file = fopen('outputs/categories.json', 'w');
        fwrite($file, $json);
        fclose($file);
    }
    public function getProducts($url){
        $url = ltrim($url, '/');
        $res = $this->httpGet($this->base_url . $url);
        $doc = new DOMDocument();
        @$doc->loadHTML($res);
        $xpath = new DOMXPath($doc);
        $slugify = new Cocur\Slugify\Slugify();
        $parents = $xpath->query('/html/body/div[3]/div/div/div[2]/div[2]');
        dd($parents[0]->childNodes);
    }
    public function run($url, $params = []) {
        $this->getCategories($url);
    }
    public function go(){
        echo "Started...\n";
        $this->run("");
        echo "Ended...\n";
    }
}

$bot = new Bot();
$bot->go();