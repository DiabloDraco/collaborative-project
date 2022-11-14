<?php
    $_POST['m'] = $MERCHANT_ID;  
    $_POST['ao'] = $ORDER_AMOUNT; 
    $_POST['o'] = $PAYMENT_ID;  
    $_POST['s'] = $sign;  

    $MERCHANT_ID   = 15;                 // ID магазина
    $SECRET_WORD   = 'Секретный ключ';   // Секретный ключ
    $ORDER_AMOUNT  = 10;                 // Сумма заказа
    $PAYMENT_ID    = time();             // ID заказа (мы используем time(), чтобы был всегда уникальный ID)

    $sign = md5($MERCHANT_ID.':'.$ORDER_AMOUNT.':'.$SECRET_WORD.':'.$PAYMENT_ID);  //Генерация ключа

    echo $sign

    file_get_contents('https://billing.cx/pay/step-one{$MERCHANT_ID}{$ORDER_AMOUNT}{$PAYMENT_ID}{$sign}');

    header: Location(/)

?>