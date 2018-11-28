<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ChangedStatus extends Mailable
{
    use Queueable, SerializesModels;

    protected $excursion;
    protected $content;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($excursion, $content)
    {
        $this->excursion = $excursion;
        $this->content = $content;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $email = $this->content;
        $excursion = $this->excursion;

        return $this->cc(['ekompanec@gmail.com', 'irka.v.struk@gmail.com'])
            ->subject($email->subject??'')
            ->markdown('emails.changed_status')
            ->with(compact('email', 'excursion'));
    }
}
